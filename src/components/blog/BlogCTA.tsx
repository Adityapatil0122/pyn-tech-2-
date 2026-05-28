
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import PynCTA from "@/components/shared/PynCTA";

const BlogCTA = () => {
  return (
    <PynCTA
      eyebrow="Pyn notes"
      title="Want to stay updated?"
      description="Subscribe to our newsletter and get the latest insights on technology, digital marketing, and business trends."
      compact
    >
      <form className="flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <input 
            type="email"
            placeholder="Your email address"
          className="w-full rounded-md border border-white/15 bg-white px-4 py-3 text-pyn-dark outline-none transition focus:border-pyn-amber"
          />
        <Button size="lg" type="submit" className="whitespace-nowrap bg-pyn-amber text-pyn-dark hover:bg-pyn-amber/80">
            Subscribe
          </Button>
      </form>

      <div className="mt-5 text-sm">
        <Link to="/blogs" className="text-pyn-lightBlue underline transition-colors hover:text-white">
            Or browse all our blog articles
          </Link>
        </div>
    </PynCTA>
  );
};

export default BlogCTA;
