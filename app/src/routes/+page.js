// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async ({ fetch }) => {

    const getSamplePosts = async () => {
        const res = await fetch('http://localhost:8000/api/sample-posts')
        const data = await res.json()
        return data
    }

    return {
        samplePosts: await getSamplePosts()
    }

}