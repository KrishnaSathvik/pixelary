import React from "react";
import { Copy, Check } from "lucide-react";

// Lightweight markdown renderer tailored to the blog content.
// Supports: H2/H3, paragraphs, bold, italic, inline code, links,
// fenced code blocks, unordered/ordered lists, blockquotes, tables, hr.

interface RenderedContent {
  nodes: React.ReactNode;
  headings: { id: string; text: string; level: 2 | 3 }[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="group relative my-6">
      <pre className="overflow-x-auto rounded-lg border border-border/60 bg-[var(--code-bg)] p-4 text-sm">
        <code className="font-mono text-[var(--code-fg)] whitespace-pre-wrap break-words">
          {code}
        </code>
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-card/80 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

// Inline parser: bold, italic, inline code, links
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Pattern order matters; we'll use a tokenizer.
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;
    if (token.startsWith("`")) {
      nodes.push(
        <code
          key={key}
          className="rounded bg-[var(--code-bg)] px-1.5 py-0.5 font-mono text-[0.85em] text-[var(--code-fg)]"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("**")) {
      nodes.push(
        <strong key={key} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("[")) {
      const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (m) {
        nodes.push(
          <a
            key={key}
            href={m[2]}
            className="text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
          >
            {m[1]}
          </a>
        );
      }
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export function renderMarkdown(md: string): RenderedContent {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: React.ReactNode[] = [];
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      out.push(<CodeBlock key={`code-${key++}`} code={codeLines.join("\n")} />);
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      const id = slugify(text);
      headings.push({ id, text, level: 2 });
      out.push(
        <h2
          key={`h-${key++}`}
          id={id}
          className="mt-20 mb-5 scroll-mt-24 font-serif text-3xl font-bold tracking-tight text-foreground"
        >
          {text}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      const id = slugify(text);
      headings.push({ id, text, level: 3 });
      out.push(
        <h3
          key={`h-${key++}`}
          id={id}
          className="mt-10 mb-3 scroll-mt-24 text-2xl font-bold text-foreground"
        >
          {text}
        </h3>
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      out.push(<hr key={`hr-${key++}`} className="my-10 border-border/60" />);
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      out.push(
        <blockquote
          key={`q-${key++}`}
          className="my-6 border-l-4 border-primary pl-6 font-serif text-2xl italic text-muted-foreground"
        >
          {renderInline(quoteLines.join(" "), `q-${key}`)}
        </blockquote>
      );
      continue;
    }

    // Table (must start with "|")
    if (line.startsWith("|") && i + 1 < lines.length && /^\|[\s:-|]+\|$/.test(lines[i + 1])) {
      const headerCells = line
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(
          lines[i]
            .slice(1, -1)
            .split("|")
            .map((c) => c.trim())
        );
        i++;
      }
      out.push(
        <div key={`tbl-${key++}`} className="my-6 overflow-x-auto rounded-lg border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                {headerCells.map((c, idx) => (
                  <th key={idx} className="px-4 py-3 text-left font-semibold text-foreground">
                    {renderInline(c, `th-${idx}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="border-t border-border/60">
                  {row.map((c, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 align-top text-muted-foreground">
                      {renderInline(c, `td-${rIdx}-${cIdx}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(lines[i].replace(/^[-*] /, ""));
        i++;
      }
      out.push(
        <ul key={`ul-${key++}`} className="my-5 space-y-2 pl-5">
          {items.map((it, idx) => (
            <li
              key={idx}
              className="relative pl-4 text-muted-foreground before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
            >
              {renderInline(it, `li-${idx}`)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      out.push(
        <ol key={`ol-${key++}`} className="my-5 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary">
          {items.map((it, idx) => (
            <li key={idx} className="pl-1 text-muted-foreground">
              {renderInline(it, `oli-${idx}`)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Blank lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph: collect consecutive non-blank, non-special lines
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("> ") &&
      !/^[-*] /.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !lines[i].startsWith("|")
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    out.push(
      <p key={`p-${key++}`} className="my-5 text-[1.0625rem] leading-[1.75] text-muted-foreground">
        {renderInline(paraLines.join(" "), `p-${key}`)}
      </p>
    );
  }

  return { nodes: out, headings };
}
