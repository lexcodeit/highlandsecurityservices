import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Loader, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import VerificationInput from "react-verification-input";
import { cn } from "@/lib/utils";
import { useCheckAdminAccountExists } from "@/lib/features/auth/use-check-admin-account-exists";

const SignInCard = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);
    const [pendingVerification, setPendingVerification] = useState(false);
    const [inputMode, setInputMode] = useState(false);
    const { signIn } = useAuthActions();
    const { mutate: checkAccount, isPending } = useCheckAdminAccountExists();
    const router = useRouter();

    const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        checkAccount(
            {
                email,
            },
            {
                onSuccess() {
                    setPending(true);
                    signIn("resend-otp", { email, flow: "signIn" })
                        .then(() => {
                            toast.success("Login successful");
                            setInputMode(true);
                            setError("");
                        })
                        .catch(() => {
                            setError("Invalid email or password");
                            toast.success("Login failed");
                        })
                        .finally(() => {
                            setPending(false);
                        });
                },
                onError(error) {
                    console.log("[CHECK_LOGIN_ACCT:]", error);
                    toast.error(error.message || "Failed to login account.");
                },
            }
        );
    };

    const handleVerification = (value: string) => {
        setPendingVerification(true);
        signIn("resend-otp", {
            email,
            code: value,
            flow: "signIn",
        })
            .then(() => {
                toast.success("Login successful");
                setInputMode(false);
                setError("");
                router.replace("/control-admin");
            })
            .catch(() => {
                setError("Invalid email or password");
                toast.success("Login failed");
            })
            .finally(() => {
                setPendingVerification(false);
            });
    };

    return (
        <Card className="w-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Login to Continue</CardTitle>
                <CardDescription>
                    Use your email that was assigned to you to continue
                </CardDescription>
            </CardHeader>
            {!!error && (
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                    <TriangleAlert className="size-4 " />
                    <p>{error}</p>
                </div>
            )}
            <CardContent className="space-y-5 px-0 pb-0 relative">
                {pendingVerification || isPending || pending ? (
                    <div className="absolute top-2 right-0 w-5 h-6">
                        <Loader className="size-5 animate-spin" />
                    </div>
                ) : null}
                {inputMode ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center max-w-md">
                        <div className="flex flex-col gap-y-2 items-center justify-center">
                            <h1 className="text-2xl font-bold">
                                Enter Verification Code
                            </h1>
                        </div>
                        <VerificationInput
                            classNames={{
                                container: cn(
                                    "flex gap-x-2",
                                    pendingVerification &&
                                        "opacity-50 cursor-not-allowed"
                                ),
                                character:
                                    "uppercase h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium text-gray-500",
                                characterInactive: "bg-muted",
                                characterSelected: "bg-white text-black",
                                characterFilled: "bg-white text-black",
                            }}
                            autoFocus
                            length={6}
                            onComplete={handleVerification}
                        />
                    </div>
                ) : (
                    <form className="space-y-2.5" onSubmit={onPasswordSignIn}>
                        <Input
                            disabled={pending || isPending}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                            type="email"
                            required
                        />
                        <Button
                            type="submit"
                            className="w-full"
                            size={"lg"}
                            disabled={pending || isPending}
                        >
                            Continue
                        </Button>
                    </form>
                )}

                <Separator />
            </CardContent>
        </Card>
    );
};

export default SignInCard;
