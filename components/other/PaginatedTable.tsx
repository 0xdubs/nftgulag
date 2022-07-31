import React, { useEffect, useState } from "react";
// import battle from "../public/assets/battle.svg";
import axios from "axios";
import usePagination from "../../hooks/usePagination";
//add input for specific page
function PaginatedTable() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 15,
    count: people.length,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          "https://random-data-api.com/api/users/random_user?size=100"
        );
        setPeople(data.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="App">
      {/* <img src={logo} alt="react logo" /> */}
      {/* <h1 className="title">usePagination()</h1> */}
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error fetching users</h2>
      ) : (
        <>
          <div className="pagination">
            <p className="text">
              {page}/{totalPages}
            </p>
            <button
              onClick={prevPage}
              className={`page ${page === 1 && "disabled"}`}
            >
              &larr;
            </button>
            <button
              onClick={() => setPage(1)}
              className={`page ${page === 1 && "disabled"}`}
            >
              1
            </button>
            {gaps.before ? "..." : null}
            {/* @ts-ignore */}
            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                key={el}
                className={`page ${page === el ? "active" : ""}`}
              >
                {el}
              </button>
            ))}
            {gaps.after ? "..." : null}
            <button
              onClick={() => setPage(totalPages)}
              className={`page ${page === totalPages && "disabled"}`}
            >
              {totalPages}
            </button>
            <button
              onClick={nextPage}
              className={`page ${page === totalPages && "disabled"}`}
            >
              &rarr;
            </button>
          </div>
          <div className="items">
            {people
              .slice(firstContentIndex, lastContentIndex)
              .map((el: any) => (
                <div className="item" key={el.uid}>
                  <img
                    src={`https://avatars.dicebear.com/api/big-smile/${el.first_name}.svg`}
                    alt={`${el.username} profile`}
                    className="item__img"
                  />
                  <div className="item__info">
                    <p className="name">
                      {el.first_name} {el.last_name}{" "}
                      <span className="username">(@{el.username})</span>
                    </p>
                    <p className="job">{el.employment.title}</p>
                    <p
                      className={`status ${
                        el.subscription.status.toLowerCase() === "active"
                          ? "success"
                          : el.subscription.status.toLowerCase() === "blocked"
                          ? "danger"
                          : "warn"
                      }`}
                    >
                      {el.subscription.status}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      <style jsx>{`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 10px;
  background-color: #151515;
}

.App {
  min-height: 100vh;
  color: white;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.pagination .text {
  opacity: 0.6;
  font-size: 1.5rem;
}

.page {
  color: white;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: solid 0.2rem #4aa5be;
  background-color: transparent;
  border-radius: 0.7rem;
  cursor: pointer;
}

.page.active,
.page:hover {
  background-color: #4aa5be;
}

.page.disabled {
  background-color: transparent !important;
  cursor: not-allowed;
  opacity: 0.5;
}

h2 {
  margin-top: 4rem;
  text-align: center;
  text-transform: uppercase;
}

.App img {
  margin: 0 auto;
  height: 10rem;
  display: block;
}

.App .title {
  text-align: center;
  padding: 1rem;
  border-radius: 0.7rem;
  color: #61dafb;
  background-color: #61dafb0d;
  width: fit-content;
  margin: 0 auto;
  font-family: monospace;
}

.items {
  margin: 0 auto;
  margin-top: 4rem;
  width: clamp(35rem, 60vw, 50rem);
}

.App .item {
  font-size: 1.6rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: #222222;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 4rem;
}

.App .item p {
  margin-bottom: 0.4rem;
}

.App .item img {
  margin: 0;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #121212;
}

.App .item .name {
  text-transform: capitalize;
}

.App .item .username {
  opacity: 0.7;
  font-size: 1.4rem;
}

.App .item .job {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.3rem;
}

.App .item .status {
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0.75rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0.4rem;
  width: fit-content;
}

.App .item .status.success {
  background-color: rgba(67, 255, 76, 0.1);
  color: #c4ffc4;
}

.App .item .status.warn {
  background-color: rgb(195, 160, 35, 0.1);
  color: #ffd358;
}

.App .item .status.danger {
  background-color: rgb(239, 90, 90, 0.28);
  color: #ffe7e7;
}`}
      </style>
    </div>
  );
}

export default PaginatedTable;