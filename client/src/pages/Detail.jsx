import React, { useEffect, useState } from 'react'
import CardBottom from '../components/CardBottom'
import { useGetSingleBlogQuery } from '../services/blog'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

const Detail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null); // Initialize as null
    const { data, isLoading } = useGetSingleBlogQuery(`${id}`)
    
    useEffect(() => {
        if (data?.post) {
            setPost(data.post);
        }
    }, [data]);

    return (
        <main>
            <Loader isLoading={isLoading} />
            {!isLoading && post && (
                <section className="my-12">
                    <CardBottom item={post} />
                    <img src={`http://127.0.0.1:4000/uploads/${post?.heroImg}`} alt="" className="max-h-[400px] w-full object-cover rounded-lg my-12" />
                    <div className="content text-xs rich-text-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                </section>
            )}
        </main>
    )
}

export default Detail