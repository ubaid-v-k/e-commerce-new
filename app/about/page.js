import Image from "next/image";
import Link from "next/link";

export default function About() {
  const primaryColor = "#e91e63";

  const values = [
    {
      icon: "🌿",
      title: "Sustainability",
      desc: "We engineer our collections using ethical materials and transparent, earth-conscious production. Fashion shouldn't cost the planet.",
    },
    {
      icon: "✨",
      title: "Exclusivity",
      desc: "We launch limited-edition capsules and unique designs. Your style is yours alone, and your wardrobe should reflect that.",
    },
    {
      icon: "🖤",
      title: "Quality",
      desc: "From the first stitch to the final wear, we use premium textiles and superior craftsmanship for pieces that endure both time and trend.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        color: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "25px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            marginBottom: "50px",
          }}
        >
          <Image
            href="../../public/photo-1521334884684-d80222895322.avif"
            alt="Fashion Hero"
            width={1600}
            height={480}
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
              filter: "brightness(75%)",
            }}
            priority
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              textShadow: "0 4px 10px rgba(0,0,0,0.5)",
              maxWidth: "800px",
              padding: "0 20px",
            }}
          >
            <h1 style={{ fontSize: "52px", fontWeight: "700", marginBottom: "15px" }}>
              VogueThreads: Dress for the Life You&apos;re Building.
            </h1>
            <p style={{ fontSize: "18px", margin: "0 auto" }}>
              We don&apos;t just sell clothes; we curate the confidence you wear. Explore the future of your style with pieces built to last.
            </p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          maxWidth: "1200px",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "20px" }}>Beyond the Fabric: Our Vision</h2>
          <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "25px" }}>
            VogueThreads was founded not to follow trends, but to <strong>redefine them</strong>. We saw a fashion world built on fast cycles and fleeting quality. Our mission, since 2020, has been to slow it down—creating a collection where <strong>timeless design meets uncompromising quality</strong>. We are a global movement for those who see clothing as a canvas for self-expression.
          </p>
          <p style={{ color: "#555", lineHeight: "1.8" }}>
            Every item is meticulously sourced, balancing <strong>luxury-grade craftsmanship</strong> with a commitment to ethical and <strong>sustainable production</strong>. We ensure that when you invest in VogueThreads, you&apos;re not just buying a look—you&apos;re buying a long-term piece of your personal style journey.
          </p>
        </div>

        <Image
          href="../../public/style-1.avif"
          alt="Our Boutique"
          width={800}
          height={600}
          style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            objectFit: "cover",
          }}
        />
      </section>

      {/* VALUES SECTION */}
      <section
        style={{
          maxWidth: "1100px",
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <h2 style={{ fontSize: "30px", fontWeight: "600", marginBottom: "40px" }}>What We Stand For</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {values.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fafafa",
                borderRadius: "20px",
                padding: "30px 20px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#666", lineHeight: "1.7" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section
        style={{
          maxWidth: "1200px",
          marginBottom: "100px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Our Fashion Moments
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          <Image
            href="../../public/trend-1.jpg"
            alt="Fashion look 1"
            width={400}
            height={895}
            style={{
              width: "100%",
              height: "895px",
              objectFit: "cover",
              borderRadius: "15px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
            }}
          />
          <Image
            href="../../public/trend-2.jpg"
            alt="Fashion look 2"
            width={400}
            height={700}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              borderRadius: "15px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
            }}
          />
          <Image
            href="../../public/messi.jpg"
            alt="Fashion look 3"
            width={400}
            height={750}
            style={{
              width: "100%",
              height: "750px",
              objectFit: "cover",
              borderRadius: "15px",
              boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          textAlign: "center",
          maxWidth: "700px",
          marginBottom: "100px",
        }}
      >
        <h2 style={{ fontSize: "30px", fontWeight: "600", marginBottom: "20px" }}>
          Your Next Chapter of Style Starts Now
        </h2>
        <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "30px" }}>
          Ready to upgrade your wardrobe with pieces that are as confident and enduring as you are? Join the <strong>VogueThreads community</strong> and discover the difference intentional design makes.
        </p>

        <Link
          href="/shop"
          style={{
            display: "inline-block",
            backgroundColor: primaryColor,
            color: "#fff",
            padding: "14px 40px",
            borderRadius: "50px",
            fontWeight: "500",
            textDecoration: "none",
            transition: "0.3s",
          }}
        >
          Shop The Latest Collections
        </Link>
      </section>
    </div>
  );
}
