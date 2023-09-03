import { useEffect,useState } from "react";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit()

export const getPublicGists = () => octokit.gists.listPublic()

export const getGistForUser = username =>  octokit.gists.listForUser({ username });


//Debounce use for lazzing or time gain for user input 
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => clearTimeout(timeoutId);
    }, [value]);
  
    return debouncedValue;
  }