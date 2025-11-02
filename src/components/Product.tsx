import { useEffect, useState } from "react";
import axios from "axios";
import { getAllProducts } from "../api/api";

interface ProductItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export const Product = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await axios.get<ProductItem[]>(
        "http://localhost:3001/v1/products"
      );
      setProducts(response.data);
    } catch (error:any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
         try {
            setError(null);
            setLoading(true);
            getAllProducts().then((products) => {
                setProducts(products);
            });
         } catch (error:any) {
            setError(error);
         }
         finally {
            setLoading(false);
         }
  }, []);




  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.title}>Products</h1>
          <div style={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.skeletonImage} />
                <div style={styles.skeletonText} />
                <div style={{ ...styles.skeletonText, width: "60%" }} />
                <div style={{ ...styles.skeletonText, width: "40%" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.title}>Products</h1>
          <div style={styles.errorBox}>
            <p style={{ margin: 0 }}>{error}</p>
            <button style={styles.button} onClick={() => fetchProducts()}>
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Products</h1>

        {products.length === 0 ? (
          <div style={styles.emptyState}>
            <p>No products yet.</p>
            <button style={styles.button} onClick={() => fetchProducts()}>
              Refresh
            </button>
          </div>
        ) : (
          <div style={styles.grid}>
            {products.map((product) => (
              <div key={product.id} style={styles.card}>
                <div style={styles.imageWrap}>
                  {/* If image might be missing, optionally fallback */}
                  <img
                    src={product.image}
                    alt={product.name}
                    style={styles.image}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://via.placeholder.com/600x400?text=No+Image";
                    }}
                  />
                </div>

                <div style={styles.cardBody}>
                  <div style={styles.headerRow}>
                    <h2 style={styles.cardTitle}>{product.name}</h2>
                    <span style={styles.priceTag}>
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </span>
                  </div>

                  <p style={styles.description} title={product.description}>
                    {product.description}
                  </p>

                  <div style={styles.metaRow}>
                    <span style={styles.badge}>{product.category}</span>
                    <span style={styles.metaText}>
                      Added{" "}
                      {new Date(product.createdAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div style={styles.actions}>
                    <button style={styles.ghostButton}>Details</button>
                    <button style={styles.primaryButton}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


const styles: Record<string, React.CSSProperties> = {
  page: {
    background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 60%)",
    minHeight: "100vh",
    padding: "40px 16px",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.02em",
    margin: "0 0 20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
    background: "#fff",
    borderRadius: 16,
    boxShadow:
      "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #eef2f7",
  },
  imageWrap: {
    position: "relative",
    width: "100%",
    paddingBottom: "62.5%", // 16:10 aspect
    overflow: "hidden",
    background: "#f1f5f9",
  },
  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 200ms ease",
  },
  cardBody: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.2,
    flex: 1,
  },
  priceTag: {
    background: "#0ea5e9",
    color: "#fff",
    fontWeight: 700,
    borderRadius: 12,
    padding: "6px 10px",
    fontSize: 12,
    whiteSpace: "nowrap",
  },
  description: {
    margin: "2px 0 0",
    color: "#475569",
    fontSize: 14,
    lineHeight: 1.45,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    color: "#64748b",
    fontSize: 12,
  },
  badge: {
    background: "#eef2ff",
    color: "#4338ca",
    border: "1px solid #c7d2fe",
    padding: "4px 8px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 600,
  },
  metaText: {
    whiteSpace: "nowrap",
  },
  actions: {
    display: "flex",
    gap: 8,
    marginTop: 6,
  },
  primaryButton: {
    flex: 1,
    padding: "10px 12px",
    background: "#111827",
    color: "white",
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 700,
  },
  ghostButton: {
    flex: 1,
    padding: "10px 12px",
    background: "transparent",
    color: "#111827",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 700,
  },
  errorBox: {
    background: "#fef2f2",
    color: "#991b1b",
    border: "1px solid #fecaca",
    borderRadius: 12,
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  emptyState: {
    background: "#f8fafc",
    border: "1px dashed #cbd5e1",
    borderRadius: 16,
    padding: 24,
    textAlign: "center",
  },
  button: {
    background: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "10px 14px",
    cursor: "pointer",
    fontWeight: 700,
  },
  skeletonImage: {
    width: "100%",
    paddingBottom: "62.5%",
    background:
      "linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 37%, #f1f5f9 63%)",
    backgroundSize: "400% 100%",
    animation: "shimmer 1.4s ease infinite",
  },
  skeletonText: {
    height: 12,
    background:
      "linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 37%, #f1f5f9 63%)",
    backgroundSize: "400% 100%",
    animation: "shimmer 1.4s ease infinite",
    borderRadius: 6,
    marginTop: 10,
  },
};

