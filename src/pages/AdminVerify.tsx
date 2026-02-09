import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, AlertCircle, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MD5 from "crypto-js/md5";

const AdminVerify = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Simulate PHP type juggling vulnerability
  // In PHP: "0e462097431906509019562988736854" == "0e12345..." evaluates to 0 == 0 = true
  const verifyCode = (verificationCode: string): boolean => {
    const storedHash = "0e462097431906509019562988736854";
    const userHash = MD5(verificationCode).toString();
    
    // Simulate PHP's loose comparison (==) type juggling
    // Both hashes starting with "0e" followed by only digits are treated as 0 in scientific notation
    const isMagicHash = (hash: string): boolean => {
      return /^0e\d+$/.test(hash);
    };
    
    // If both are "magic hashes" (0e followed by only digits), they compare as equal (0 == 0)
    if (isMagicHash(storedHash) && isMagicHash(userHash)) {
      return true;
    }
    
    // Otherwise, do exact comparison
    return userHash === storedHash;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (verifyCode(code)) {
      // Store session
      sessionStorage.setItem("admin_verified", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid verification code");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Dark admin header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Hackoff FC</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4">
        {/* Hidden HTML comment hint for CTF */}
        {/* <!-- TODO: Remove debug endpoint before go-live --> */}
        
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-xl p-8 shadow-2xl">
            {/* Lock icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center">
                <Lock className="w-8 h-8 text-destructive" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center text-foreground mb-2">
              Staff Only
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Verification Required
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-foreground mb-2">
                  Verification Code
                </label>
                <Input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your verification code"
                  className="bg-muted border-border"
                  autoComplete="off"
                  required
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify Access"}
              </Button>
            </form>

            <p className="mt-6 text-xs text-muted-foreground text-center">
              This area is restricted to authorized personnel only.
              <br />
              Unauthorized access attempts are logged.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminVerify;
