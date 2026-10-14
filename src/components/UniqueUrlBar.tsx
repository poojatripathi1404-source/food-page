import React, { useState } from 'react';
import { Copy, Check, Share2, Globe } from 'lucide-react';
import { useRouter } from '../router/router';

interface UniqueUrlBarProps {
  slug: string;
  title: string;
}

export const UniqueUrlBar: React.FC<UniqueUrlBarProps> = ({ slug, title }) => {
  const { canonicalUrl } = useRouter();
  const [copied, setCopied] = useState(false);

  // Compute the clean deep link URL
  const articleUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/blog/${slug}`
    : `/blog/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url: articleUrl,
      }).catch(() => {});
    } else {
      handleCopy();
    }
  };

  return (
    <div className="bg-stone-100/90 border border-stone-200 rounded-lg p-3 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-600">
      <div className="flex items-center gap-2 min-w-0">
        <Globe className="w-4 h-4 text-stone-500 shrink-0" />
        <span className="font-semibold text-stone-800 uppercase tracking-wider text-[11px] shrink-0">
          Direct Article URL:
        </span>
        <span className="font-mono text-stone-700 bg-white/80 px-2 py-0.5 rounded border border-stone-200/70 truncate select-all">
          /blog/{slug}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 rounded-md font-medium transition-all shadow-2xs active:scale-95"
          title="Copy direct permanent URL"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">Copied Link!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-stone-500" />
              <span>Copy Direct Link</span>
            </>
          )}
        </button>

        <button
          onClick={handleNativeShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-50 rounded-md font-medium transition-all shadow-2xs active:scale-95"
          title="Share article link"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};
