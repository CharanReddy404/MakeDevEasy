import { Button } from "@/components/ui/button";

export default function index() {
    return (
        <>
            <div className="flex h-[calc(100vh-84px)] items-center justify-center ">
                <div className="px-4 !text-center md:px-20">
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
                        Transforming ideas into powerful software solutions.
                    </h1>
                    <p className="mb-10 text-lg text-gray-600 md:px-32">
                        MakeDevEasy turns your ideas into robust software solutions. Our
                        passionate team delivers customized development services to drive
                        your business forward. Partner with us for innovation and tailored
                        excellence.
                    </p>
                    <Button className="bg-black/90 hover:bg-black">
                        Get Started
                    </Button>
                </div>
            </div>
        </>
    );
}
