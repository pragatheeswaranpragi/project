import React, { useEffect , useState } from "react";
import Typical from 'react-typical';
 
export default function UrlCheck () {
const [pass, setPass] = useState(true)
const [url, setUrl] = useState(null)
const [domainName, setDomainName] = useState(null)
const [domainStatus, setDomainStatus] =useState(null)
 
const urlCheck = [
{
url:"google.com",
status: "good",
},
{
url:"tamilRockerz.com",
status: "bad",
},
{
url:"amazon.com",
status: "good",
},
{
url:"au.com",
status: "good",
},
{
url:"aamec.com",
status: "good",
},
{
url:"virus4u.com",
status: "bad",
},
{
url:"infinix.com",
status: "bad",
}
]
 
useEffect(() => {
 
    let domain = '';
    if (url?.indexOf("://") > -1) {
        domain = url?.split('/')[2];
    }
    else {
        domain = url?.split('/')[0];
    }
    if (domain?.indexOf("www.") > -1) {
        domain = domain?.split('www.')[1];
    }
    domain = domain?.split(':')[0]; //find & remove port number
    domain = domain?.split('?')[0]; //find & remove url params
    console.log(domain)
    setDomainName(domain)
},[url])
 
useEffect(() => {
    console.log(urlCheck)
    {
        if (urlCheck
) {
            urlCheck.filter((e) => e.url === domainName).map((e, i) => {
                console.log(e)
                setDomainStatus(e.status)
            })
      } else {
        domainName ?
        setDomainStatus('bad') : setDomainStatus(null)
      }
    }
},[url, domainName])
 
console.log(domainStatus)
return(
<div>
    <section className="text-white bg-gray-900 h-screen">
        <main className="font-mono relative overflow-hidden py-56">
            <div className="flex relative z-20 items-center">
                <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div className="flex flex-col">
                        <div className="max-w-3xl mx-auto text-center pt-8">
                            <div
                                className="mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 font-bold text-lg lg:text-3xl">
                                <Typical loop={Infinity} steps={[ 'Check URL' ,3000, 'Verify URL' ,3000]} />
                            </div>
                            <div>
                                <label className="pr-5">URL</label>
                                <input
                                    placeholder='Enter a url'
                                    value={url}
                                    className="border-2 pl-2 py-2 border-blue-800 rounded-md text-black"
                                    onChange={(e)=> setUrl(e.target.value)}
                                />
                                {console.log(domainName)}
                                {domainStatus &&
                                <div className="text-center pt-8">
                                    <div>
                                    <div>
                                        {domainStatus == 'good' ? <p className="text-green-600 text-xl">SAFE</p> : <p
                                            className="text-rose-700 text-xl">UNSAFE</p> }
                                    </div>
                                    {domainStatus == 'good' ? <iframe src="https://embed.lottiefiles.com/animation/79952"></iframe> : <iframe src="https://embed.lottiefiles.com/animation/14651"></iframe> }  
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</div>
)
}
