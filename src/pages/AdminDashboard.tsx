import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Trophy, Flag, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showFlag, setShowFlag] = useState(false);

  useEffect(() => {
    // Check if user is verified
    const isVerified = sessionStorage.getItem("admin_verified");
    if (!isVerified) {
      navigate("/admin");
      return;
    }

    // Trigger confetti celebration
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#22c55e", "#fbbf24", "#ffffff"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#22c55e", "#fbbf24", "#ffffff"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Show flag with delay for dramatic effect
    setTimeout(() => setShowFlag(true), 500);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Hackoff FC</span>
            </Link>
            <div className="flex items-center gap-2 text-accent">
              <Trophy className="w-5 h-5" />
              <span className="font-bold">Admin Panel</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center">
          {/* Success animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center animate-pulse">
                <PartyPopper className="w-12 h-12 text-accent-foreground" />
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-lg">✓</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-accent mb-4">
            ACCESS GRANTED
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Welcome, Admin! You've bypassed the verification.
          </p>

          {/* Flag reveal */}
          {showFlag && (
            <div className="bg-card border-2 border-accent rounded-xl p-8 shadow-2xl shadow-accent/20 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Flag className="w-6 h-6 text-accent" />
                <span className="text-lg font-bold text-accent">FLAG CAPTURED</span>
                <Flag className="w-6 h-6 text-accent" />
              </div>
              
              <div className="bg-muted rounded-lg p-6 font-mono">
                <span className="text-2xl md:text-3xl font-bold text-foreground break-all">
                  hackoff{"{"}typ3_juggl1ng_g04l{"}"}
                </span>
              </div>

              <p className="mt-6 text-muted-foreground text-sm">
                🎉 Congratulations! You exploited PHP's type juggling vulnerability.
                <br />
                The loose comparison (==) treated both 0e... hashes as 0 in scientific notation.
              </p>
            </div>
          )}

          {/* Trophy celebration */}
          <div className="mt-12 flex justify-center gap-4">
            <Trophy className="w-8 h-8 text-accent animate-bounce" style={{ animationDelay: "0ms" }} />
            <Trophy className="w-8 h-8 text-accent animate-bounce" style={{ animationDelay: "100ms" }} />
            <Trophy className="w-8 h-8 text-accent animate-bounce" style={{ animationDelay: "200ms" }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
