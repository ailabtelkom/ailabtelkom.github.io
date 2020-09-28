import useSWR from "swr";
import matter from "gray-matter";

const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.text())
    .then((data) => matter(data));
const getNlpData = () => {
  const { data, error } = useSWR(
    `https://raw.githubusercontent.com/ailabtelkom/id-NLP-resources/master/README.md`,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export { getNlpData };
