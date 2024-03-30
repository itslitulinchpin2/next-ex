/** @type {import('next').NextConfig} */
const nextConfig = {
    "experimental":{
        "appDir":true
    },
    "images":{
        remotePatterns:[
            {
                protocol:'https',
                hostname:"images.unsplash.com"
            }
        ]
    },
    async redircts(){
        return [
            {
                source: "/products/deleted_forever",
                destination:"/products",
                permanent:true
            },{
                source: "/products/deleted_temp",
                destination:"/products",
                permanent:false
            }

        ]
    }
};

export default nextConfig;
