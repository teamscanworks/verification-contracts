import { FC, useCallback, useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import styles from './ThemeChange.module.scss';

import { useTheme } from 'next-themes';

const DARK = 'dark';
const LIGHT = 'light';

const ThemeChange: FC = () => {
  const { setTheme } = useTheme();
  const [themeState, setThemeState] = useState(DARK);

  const handleSetTheme = useCallback(
    (themeSelected: string) => {
      setTheme(themeSelected);
      setThemeState(themeSelected);
    },
    [setTheme, setThemeState],
  );

  useEffect(() => {
    setTheme(DARK);
  }, [setTheme]);

  return (
    <div className={styles.themeButton}>
      {themeState === DARK ? (
        <div onClick={() => handleSetTheme(LIGHT)}>
          <MdLightMode className={styles.icon} size={30} />
        </div>
      ) : (
        <div onClick={() => handleSetTheme(DARK)}>
          <MdDarkMode className={styles.iconOn} size={25} />
        </div>
      )}
    </div>
  );
};

export default ThemeChange;
