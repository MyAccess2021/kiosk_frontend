"use client"

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme as useNextTheme } from 'next-themes';

export function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: resolvedTheme === 'dark' ? 'dark' : 'light',
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
          background: {
            default: resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff',
            paper: resolvedTheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
          },
        },
        typography: {
          fontFamily: 'Arial, Helvetica, sans-serif',
        },
      }),
    [resolvedTheme]
  );

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}