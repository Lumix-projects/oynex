import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="w-full">
          <div className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col text-left gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                className="border rounded-md p-2"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-left gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border rounded-md p-2"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col text-left gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                required
                className="border rounded-md p-2 resize-none"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant={"main"} type="submit" className="w-full">
          Submit Yor Message
        </Button>
      </CardFooter>
    </Card>
  );
}
