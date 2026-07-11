import styles from "./CodeBlock.module.css";
import CopyButton from "./CopyButton";
import LanguageBadge from "./LanguageBadge";

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
        <CopyButton className={styles.copyButton} />
      </div>
      <pre>
        <code className={styles.code}>{children}</code>
      </pre>
    </div>
  );
}
