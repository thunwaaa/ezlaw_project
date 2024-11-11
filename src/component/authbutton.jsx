import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import styles from './AuthButton.module.css'

export const AuthButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={styles.authbutton}
      >
        Sign in | Sign up
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={styles.dialog_content}>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.close_button}
          >
            <X className="h-4 w-4" />
          </button>

          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin" className="text-lg">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="text-lg">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="p-6">
              <form onSubmit={handleSubmit} className={styles.form_container}>
                <div className={styles.form_group}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    className="rounded-lg border-2"
                  />
                </div>
                <div className={styles.form_group}>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="rounded-lg border-2"
                  />
                </div>
                <Button type="submit" className={styles.submit_button}>
                  Sign In
                </Button>
                <div className={styles.forgot_password}>
                  <a href="#" className={styles.forgot_password_link}>
                    Forgot password?
                  </a>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="p-6">
              <form onSubmit={handleSubmit} className={styles.form_container}>
                <div className={styles.form_group}>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your Name"
                    className="rounded-lg border-2"
                  />
                </div>
                <div className={styles.form_group}>
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your Email"
                    className="rounded-lg border-2"
                  />
                </div>
                <div className={styles.form_group}>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Enter your password"
                    className="rounded-lg border-2"
                  />
                </div>
                <div className={styles.form_group}>
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Enter your password"
                    className="rounded-lg border-2"
                  />
                </div>
                <Button type="submit" className={styles.submit_button}>
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};