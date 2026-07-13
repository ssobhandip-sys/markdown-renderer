import styles from "./CodeBlock.module.css";
import CopyButton from "./CopyButton";
import LanguageBadge from "./LanguageBadge";
import SyntaxHighlighter from "./SyntaxHighlighter/SyntaxHighlighter";

export function CodeBlock({ children, className, ...props }) {
  console.log("code block", props);
  const parseLanguage = (cName) => {
    if (!cName) return;
    let language = cName.replace("language-", "");
    return language;
  };
  const language = parseLanguage(className);

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeBlockHeader}>
        <LanguageBadge language={language} style={styles.languageBadge} />
        <CopyButton text={children} className={styles.copyButton} />
      </div>
        {/* <code className={styles.code}>{children}</code> */}
        <SyntaxHighlighter code={children} language={language} />
    </div>
  );
}
