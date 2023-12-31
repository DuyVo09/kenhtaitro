"use client";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0986CA",
    },
  },
  typography: {
    fontFamily: "inherit",
    // htmlFontSize: 10,
    // fontSize: 'inherit',
  },
  components: {
    MuiTable: {
      styleOverrides:{
        root: {
            backgroundColor: "#ffffff",
            border: "1px solid #0986CA",
        },
      }
    },
    MuiTableHead: {
      styleOverrides:{
        root: {
            height: "70px",
        },
      }
    },
    MuiTableCell: {
      styleOverrides:{
        root: {
            backgroundColor: "#ffffff",
            border: "1px solid #0986CA",
        },
        head: {
          backgroundColor: "#ffffff",
          border: "1px solid #0986CA",
      }
      }
    }
  }
});

export default function ThemeRegistry(props: any) {
  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
