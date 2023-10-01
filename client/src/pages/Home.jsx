import React, { useState, useEffect } from "react";
import { Loader, FormField, Card } from "./components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data?.map((post) => {
      return <Card key={post._id} {...post} />;
    });
  }
  return (
    <h2 className="mt-5 text-bold text-xl text=[#6449ff] uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert("error");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    //Need to use a let keyword beacuse state is giving previous value not immediatly updated
    // console.log(searchText);
    let textValue=e.target.value;
    clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        const result = allPosts.filter(
          (item) =>
          item.name.toLowerCase().includes(textValue.toLowerCase()) ||
          item.prompt.toLowerCase().includes(textValue.toLowerCase())
          );
        setSearchResults(result);
      }, 500)
    );
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[32px] text-[#222328]">
          Look what communities around the world created
        </h1>
        <p className="mt-4 text-[666e75] text-[16px] max-w-[700px]">
          Browse through the collections of stunning and innovative ideas'
          creations
        </p>
      </div>
      <div className="mt-16">
        <FormField name='name' type='text' placeholder='Search' value={searchText} handleChange={handleSearchChange} />
      </div>
      {loading ? (
        <div className="mt-16 flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          {searchText && (
            <h2 className="mt-4 text-medium text-[#666e75]">
              showing results for{" "}
              <span className="font-semibold text-[#222328]">{searchText}</span>
            </h2>
          )}
          <div className="mt-10 grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3">
            {searchText ? (
              <RenderCards data={searchResults} title="No Post Found" />
            ) : (
              <RenderCards data={allPosts} title="No Post Found" />
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
