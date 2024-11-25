import { Button } from '@/components/ui/button';
import { Instagram, Link, Facebook, Whatsapp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from 'react';
import { Copy } from 'lucide-react';

export default function Account({ session }) {
    // Copy link to clipboard function
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`https://localhost:3000/${session.user?.username}`);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    // Share link on social media function (using the web share API)
    const handleShare = (platform : any) => {
        const shareUrl = `https://localhost:3000/${session.user?.username}`;
        const shareText = `Check out my profile on this platform: ${shareUrl}`;

        if (platform === 'facebook') {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
        } else if (platform === 'instagram') {
            alert("Instagram does not support direct sharing via this method. You can copy the link to your Instagram bio or use the app to share.");
        } else if (platform === 'whatsapp') {
            window.open(`https://wa.me/?text=${shareText}`, '_blank');
        }
    };

    return (
        <>
            <div className="text-center">
                <div className='flex justify-center'>
                    <Avatar className='size-18 mb-2'>
                        <AvatarImage src={session?.user.image} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">@{session.user?.username}</h2>
                <p className="text-sm text-gray-500 mt-2">Welcome to your dashboard!</p>
                <div className="space-y-4 mt-6">
                    {/* Share link section */}
                    <p>Share your link</p>
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center border-2 p-3 rounded-lg">
                            <Link className="text-xs text-gray-600 mr-2" />
                            <p className="text-sm text-gray-800">https://localhost:3000/{session.user?.username}</p>
                        </div>
                        <Button className="w-full mt-2" onClick={handleCopy}>
                            Copy <Copy className="ml-2" />
                        </Button>
                    </div>

                    <p className="mt-3 text-sm text-gray-600">Share your link on Instagram, Facebook, or WhatsApp to get anonymous messages.</p>
                    <div className="space-y-2">
                        <Button className="w-full mt-3 flex items-center justify-center" onClick={() => handleShare('instagram')}>
                            <Instagram className="mr-2" /> Share on Instagram
                        </Button>
                        <Button className="w-full flex items-center justify-center" onClick={() => handleShare('facebook')}>
                            <Facebook className="mr-2" /> Share on Facebook
                        </Button>
                        {/* <Button className="w-full flex items-center justify-center" onClick={() => handleShare('whatsapp')}>
                            <Whatsapp className="mr-2" /> Share on WhatsApp
                        </Button> */}
                    </div>
                </div>
            </div>

            {/* Marketing Card Section */}
            <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us:</h3>
                <div className="flex flex-col space-y-3">
                    <Button className="w-full flex items-center justify-start bg-blue-600 text-white hover:bg-blue-700" onClick={() => handleShare('facebook')}>
                        <Facebook className="mr-2" />
                        Follow us on Facebook
                    </Button>
                    {/* <Button className="w-full flex items-center justify-start bg-green-600 text-white hover:bg-green-700" onClick={() => handleShare('whatsapp')}>
                        <Whatsapp className="mr-2" />
                        Join us on WhatsApp
                    </Button> */}
                    <Button className="w-full flex items-center justify-start bg-pink-600 text-white hover:bg-pink-700" onClick={() => handleShare('instagram')}>
                        <Instagram className="mr-2" />
                        Follow us on Instagram
                    </Button>
                </div>
            </div>
        </>
    );
}
