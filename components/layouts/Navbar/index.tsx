import { Button } from "@/components/ui/button";

export default function index() {
    return (
        <>
            <nav className="flex size-full items-center justify-between p-6">
                <div className="font-bold">MakeDevEasy</div>
                <div className="flex gap-6 ">
                    <Button className="hidden border bg-transparent text-black hover:bg-transparent md:block">
                        SignUp
                    </Button>
                    <Button className="hidden bg-gray-800 hover:bg-gray-800 md:block">LogIn</Button>
                </div>
            </nav>
        </>
    );
}
