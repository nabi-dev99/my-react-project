function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to My Blog</h1>
        <p style={styles.subtitle}>Sharing thoughts, tutorials, and more.</p>
      </header>

      <main style={styles.main}>
        <article style={styles.article}>
          <h2>📌 First Post</h2>
          <p>This is the beginning of my blogging journey. Stay tuned for updates!</p>
        </article>
        <article style={styles.article}>
          <h2>🚀 Learning React</h2>
          <p>React makes building UI easy and fun. I’ll be posting React tips here soon.</p>
        </article>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2025 My Personal Blog</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    color: "#333",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "36px",
    margin: "0",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
  },
  main: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  article: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
    color: "#888",
  },
};

export default App;
