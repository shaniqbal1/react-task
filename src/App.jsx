import Heading from "./assets/component/heading";
import Para from "./assets/component/para";
import Img1 from './assets/img1.webp';

function App() {

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '180px',
          overflow: 'hidden',
        }}
      >

        <img
          src={Img1}
          alt="image"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Blue overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 255, 0.4)', // 🔵 blue with 40% transparency
            zIndex: 1,
          }}
        />

        {/* Text on top of the image */}
        <div
          style={{
            position: 'absolute',
            top: '33%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 2,
          }}
        >
          <Heading head="Support Center & Knowledge Base" style={{ color: 'white', fontSize: '25px', fontWeight: 'bold' }} />
          <Para text="Find advice and answers from our support team fast or get in touch" style={{ color: 'white', fontSize: '10px' }} />
        </div>
      </div>




      {/* Boxes Section */}
      <div style={{
        background: "#f5f5f7", // light gray background
        padding: "40px 0"
      }}>
        <Heading head="Find your answer by subject" style={{
          textAlign: 'center', marginTop: '40px',
          color: 'black',
          fontSize: '21px',
          marginBottom: '20px',
          fontWeight: 500
        }} />


        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {/* Box 1 */}
          <div style={{
            background: "#fff",

            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            width: "250px",
            padding: "30px 20px",
            textAlign: "center"
          }}>
            <i className="fas fa-question-circle" style={{ fontSize: "32px", color: "#007bff", marginBottom: "12px" }}></i>
            <Heading head="installation" style={{ margin: "16px 0 8px 0", fontSize: "18px" }}
            />
            <Para text="Find advice and answers from our support team fast or get in touch " style={{
              width: '90%',
              fontSize: 'small',
              color: '#978d8d'
            }} />
          </div>
          {/* Box 2 */}
          <div style={{
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            width: "250px",
            padding: "30px 20px",
            textAlign: "center"
          }}>
            <i className="fas fa-book" style={{ fontSize: "32px", color: "#007bff", marginBottom: "12px" }}></i>
            <Heading head="Billing & Pricing" style={{ margin: "16px 0 8px 0", fontSize: "18px" }}
            />
            <Para text="Find advice and answers from our support team fast or get in touch" style={{
              width: '90%',
              fontSize: 'small',
              color: '#978d8d'
            }} />
          </div>
          {/* Box 3 */}
          <div style={{
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            width: "250px",
            padding: "30px 20px",
            textAlign: "center"
          }}>
            <i className="fas fa-headset" style={{ fontSize: "32px", color: "#007bff", marginBottom: "12px" }}></i>
            <Heading head="Features" style={{ margin: "16px 0 8px 0", fontSize: "18px" }}
            />
            <Para text=" Find advice and answers from our support team fast or get in touch" style={{
              width: '90%',
              fontSize: 'small',
              color: '#978d8d'
            }} />
          </div>
        </div>
      </div>
    </>
  )
}
export default App
