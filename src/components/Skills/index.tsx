import { skillSet } from '@/constants';
import styles from './skills.module.css';
import { useAppSelector } from '@/hooks';

const Skills = () => {
  const activeTab = useAppSelector((state) => state.active.value);

  return (
    <div
      className={`${styles.container} ${activeTab !== 2 && styles.inactive}`}
    >
      <h1 style={{ fontSize: 40, marginBottom: 10 }}>Skills</h1>
      <div className={styles.skills}>
        {skillSet.map((skill) => (
          <div key={skill.id} className={styles.skill}>
            <skill.icon className={styles.icon} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
