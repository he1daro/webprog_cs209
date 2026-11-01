import { useState, useEffect } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/14/comments');
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchComments();
    }, []);

    return (
        <section className="p-6 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors duration-300">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4 mt-0 transition-colors duration-300">
                Відгуки попередніх роботодавців:
            </h3>
            
            <div className="space-y-4">
                {comments.map((comment) => (
                    <div 
                        key={comment.id} 
                        className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg p-4 transition-colors duration-300"
                    >
                        <strong className="text-slate-800 dark:text-white">{comment.name}</strong>
                        <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">({comment.email})</span>
                        <p className="mt-2 mb-0 text-slate-700 dark:text-slate-300">{comment.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;