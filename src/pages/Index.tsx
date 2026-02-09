import { Link } from "react-router-dom";
import { Shield, Calendar, Users, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Hackoff FC</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-accent transition-colors font-medium">
                Home
              </Link>
              <Link to="/fixtures" className="text-muted-foreground hover:text-accent transition-colors">
                Fixtures
              </Link>
              <Link to="/players" className="text-muted-foreground hover:text-accent transition-colors">
                Players
              </Link>
              {/* Subtle admin link - part of the CTF */}
              <Link 
                to="/admin" 
                className="text-muted-foreground/50 hover:text-muted-foreground text-sm transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Stadium grass pattern background */}
        <div className="absolute inset-0 stadium-pattern opacity-30" />
        
        {/* Pitch lines overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[400px] border-2 border-white/10 rounded-lg">
            <div className="w-full h-1/2 border-b-2 border-white/10" />
          </div>
          <div className="absolute w-24 h-24 rounded-full border-2 border-white/10" />
        </div>

        <div className="relative z-10 text-center px-4">
          {/* Club Badge */}
          <div className="mb-8 inline-flex">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center border-4 border-accent shadow-2xl shadow-accent/20">
              <Shield className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 tracking-tight">
            HACKOFF <span className="text-accent">FC</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Official Home of the Hackers. Est. 2024
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/fixtures"
              className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-bold rounded-lg transition-all hover:scale-105"
            >
              View Fixtures
            </Link>
            <Link 
              to="/players"
              className="px-8 py-3 bg-card hover:bg-muted border border-border text-foreground font-bold rounded-lg transition-all hover:scale-105"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-muted/30 border border-border">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-black text-foreground mb-2">12</div>
              <div className="text-muted-foreground">Championships Won</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-muted/30 border border-border">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-black text-foreground mb-2">50K+</div>
              <div className="text-muted-foreground">Loyal Supporters</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-muted/30 border border-border">
              <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-black text-foreground mb-2">2024</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        {/* Hidden hint for CTF players */}
        {/* TODO: Remove debug endpoint before go-live */}
        <meta name="author" content="J. Thompson - Security Team" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">Hackoff FC</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 Hackoff Football Club. All rights reserved.
            </div>
            <div className="flex gap-4 text-muted-foreground text-sm">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
