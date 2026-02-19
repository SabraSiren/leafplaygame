import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={className ? `${styles.root} ${className}`.trim() : styles.root}>
      {children}
    </div>
  );
}
