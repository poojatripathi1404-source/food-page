import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Send } from 'lucide-react';
import { CommentItem } from '../types';

interface CommentsSectionProps {
  postSlug: string;
}

const DEFAULT_COMMENTS: Record<string, CommentItem[]> = {
  'neapolitan-pizza-art': [
    {
      id: 'c1',
      author: 'Chef Giovanni P.',
      date: 'October 9, 2026',
      rating: 5,
      comment: 'The slap-and-fold method and 48-hour cold fermentation gave the crust extraordinary air pockets. Baked in an outdoor gas oven at 450°C and got perfect maculatura!'
    },
    {
      id: 'c2',
      author: 'Alessia M.',
      date: 'October 10, 2026',
      rating: 5,
      comment: 'Draining the fior di latte for 2 hours beforehand completely fixed my soggy pizza center problem. Outstanding guide.'
    }
  ],
  'tonkotsu-ramen-mastery': [
    {
      id: 'c3',
      author: 'Hiroshi Sato',
      date: 'October 7, 2026',
      rating: 5,
      comment: 'The emphasis on the rolling boil is so true. Most Western recipes timidly simmer and wonder why their broth is transparent. The black garlic oil took this over the top.'
    }
  ]
};

export const CommentsSection: React.FC<CommentsSectionProps> = ({ postSlug }) => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storageKey = `culinary_comments_${postSlug}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch {
        setComments(DEFAULT_COMMENTS[postSlug] || []);
      }
    } else {
      setComments(DEFAULT_COMMENTS[postSlug] || [
        {
          id: 'def1',
          author: 'Elena R.',
          date: 'October 8, 2026',
          rating: 5,
          comment: 'Cooked this for family dinner over the weekend. The flavor depth and step-by-step clarity made a masterclass feel approachable!'
        }
      ]);
    }
  }, [postSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;

    const newComment: CommentItem = {
      id: `comm_${Date.now()}`,
      author: authorName.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      rating,
      comment: commentText.trim(),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(`culinary_comments_${postSlug}`, JSON.stringify(updated));

    setAuthorName('');
    setCommentText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 sm:p-8 mt-12">
      <div className="flex items-center justify-between pb-4 border-b border-stone-200">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-stone-700" />
          <h3 className="font-serif text-2xl font-medium text-stone-900">
            Reader Notes & Reviews
          </h3>
        </div>
        <span className="text-xs uppercase font-mono tracking-wider text-stone-500">
          {comments.length} {comments.length === 1 ? 'Review' : 'Reviews'}
        </span>
      </div>

      {/* Review Submission Form */}
      <form onSubmit={handleSubmit} className="mt-6 bg-white border border-stone-200/90 rounded-lg p-5">
        <h4 className="text-sm font-semibold text-stone-900 mb-3">
          Share Your Kitchen Notes or Tasting Experience
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-500 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={authorName}
              onChange={e => setAuthorName(e.target.value)}
              placeholder="e.g. Chef Sarah or Home Baker Dave"
              className="w-full text-sm px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-stone-500"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-500 font-medium mb-1">
              Your Rating
            </label>
            <div className="flex items-center gap-1.5 py-1">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 text-amber-500 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-5 h-5 ${star <= rating ? 'fill-amber-400 text-amber-500' : 'text-stone-300'}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-xs uppercase tracking-wider text-stone-500 font-medium mb-1">
            Notes & Feedback
          </label>
          <textarea
            required
            rows={3}
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            placeholder="Share temperature tips, pairing experiences, or substitution outcomes..."
            className="w-full text-sm p-3 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:border-stone-500"
          />
        </div>

        <div className="flex items-center justify-between">
          {submitted ? (
            <span className="text-xs font-semibold text-emerald-700 animate-fadeIn">
              Thank you! Your culinary note has been posted.
            </span>
          ) : <span />}

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-md text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Post Review</span>
          </button>
        </div>
      </form>

      {/* Existing Comments List */}
      <div className="mt-8 space-y-4">
        {comments.map((comm) => (
          <div key={comm.id} className="p-4 bg-white/70 border border-stone-200/70 rounded-lg">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-medium text-stone-900 text-sm">{comm.author}</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < comm.rating ? 'fill-amber-400 text-amber-500' : 'text-stone-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-stone-400">·</span>
                <span className="text-xs text-stone-500">{comm.date}</span>
              </div>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed">{comm.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
