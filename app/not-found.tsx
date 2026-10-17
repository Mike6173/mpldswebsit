import { Button, PageTop, QuoteButtons } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="pb-24">
      <PageTop
        label="404"
        title="This page doesn't exist."
        intro="It might have moved. Try the home page, or just reach out and tell me what you were looking for."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/" variant="ghost">Home page</Button>
          <QuoteButtons />
        </div>
      </PageTop>
    </div>
  );
}
