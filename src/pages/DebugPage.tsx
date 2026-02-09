import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const DebugPage = () => {
  return (
    <div className="min-h-screen bg-muted text-muted-foreground font-mono">
      {/* Warning banner */}
      <div className="bg-destructive/20 border-b border-destructive/50 px-4 py-2">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <span className="text-destructive text-sm font-bold">
            DEBUG MODE ENABLED - THIS FILE SHOULD NOT BE PUBLIC
          </span>
        </div>
      </div>

      {/* Code display */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          {/* File header */}
          <div className="bg-muted px-4 py-2 border-b border-border flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <span className="ml-4 text-sm text-muted-foreground">admin_verify.php</span>
          </div>

          {/* PHP Code with syntax highlighting */}
          <div className="p-4 overflow-x-auto">
            <pre className="php-code text-sm leading-relaxed">
              <code>
                <span className="text-muted-foreground">&lt;?php</span>{"\n"}
                <span className="comment">// admin_verify.php - INTERNAL USE ONLY</span>{"\n"}
                <span className="comment">// TODO: Remove debug mode before production deployment</span>{"\n"}
                <span className="comment">// Last modified: J. Thompson - Security Team</span>{"\n"}
                {"\n"}
                <span className="keyword">session_start</span><span className="operator">();</span>{"\n"}
                <span className="keyword">require_once</span> <span className="string">'config.php'</span><span className="operator">;</span>{"\n"}
                {"\n"}
                <span className="keyword">function</span> <span className="function">verify_admin</span><span className="operator">(</span><span className="variable">$verification_code</span><span className="operator">) {"{"}</span>{"\n"}
                {"    "}<span className="comment">// Stored verification hash (admin approved)</span>{"\n"}
                {"    "}<span className="variable">$stored_hash</span> <span className="operator">=</span> <span className="string">"0e462097431906509019562988736854"</span><span className="operator">;</span>{"\n"}
                {"\n"}
                {"    "}<span className="comment">// Hash the user's input</span>{"\n"}
                {"    "}<span className="variable">$user_hash</span> <span className="operator">=</span> <span className="function">md5</span><span className="operator">(</span><span className="variable">$verification_code</span><span className="operator">);</span>{"\n"}
                {"\n"}
                {"    "}<span className="comment">// Compare hashes - using standard PHP comparison</span>{"\n"}
                {"    "}<span className="comment">// Note: Developer said this is fine for internal use</span>{"\n"}
                {"    "}<span className="keyword">if</span> <span className="operator">(</span><span className="variable">$user_hash</span> <span className="operator">==</span> <span className="variable">$stored_hash</span><span className="operator">) {"{"}</span>{"\n"}
                {"        "}<span className="keyword">return</span> <span className="keyword">true</span><span className="operator">;</span>{"\n"}
                {"    "}<span className="operator">{"}"}</span>{"\n"}
                {"\n"}
                {"    "}<span className="keyword">return</span> <span className="keyword">false</span><span className="operator">;</span>{"\n"}
                <span className="operator">{"}"}</span>{"\n"}
                {"\n"}
                <span className="keyword">if</span> <span className="operator">(</span><span className="variable">$_SERVER</span><span className="operator">[</span><span className="string">'REQUEST_METHOD'</span><span className="operator">]</span> <span className="operator">===</span> <span className="string">'POST'</span><span className="operator">) {"{"}</span>{"\n"}
                {"    "}<span className="variable">$code</span> <span className="operator">=</span> <span className="variable">$_POST</span><span className="operator">[</span><span className="string">'verification_code'</span><span className="operator">]</span> <span className="operator">??</span> <span className="string">''</span><span className="operator">;</span>{"\n"}
                {"\n"}
                {"    "}<span className="keyword">if</span> <span className="operator">(</span><span className="function">verify_admin</span><span className="operator">(</span><span className="variable">$code</span><span className="operator">)) {"{"}</span>{"\n"}
                {"        "}<span className="variable">$_SESSION</span><span className="operator">[</span><span className="string">'admin_verified'</span><span className="operator">]</span> <span className="operator">=</span> <span className="keyword">true</span><span className="operator">;</span>{"\n"}
                {"        "}<span className="function">header</span><span className="operator">(</span><span className="string">'Location: /admin/dashboard.php'</span><span className="operator">);</span>{"\n"}
                {"        "}<span className="keyword">exit</span><span className="operator">;</span>{"\n"}
                {"    "}<span className="operator">{"}"}</span> <span className="keyword">else</span> <span className="operator">{"{"}</span>{"\n"}
                {"        "}<span className="variable">$error</span> <span className="operator">=</span> <span className="string">"Invalid verification code"</span><span className="operator">;</span>{"\n"}
                {"    "}<span className="operator">{"}"}</span>{"\n"}
                <span className="operator">{"}"}</span>{"\n"}
                <span className="text-muted-foreground">?&gt;</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-6">
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Return to main site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DebugPage;
