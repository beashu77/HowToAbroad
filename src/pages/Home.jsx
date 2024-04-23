import React, { useState, useEffect } from "react";
import CourseData from "../asset/data/courses.json";
import UniversityLogo from "../asset/images/University-logo.webp";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const totalbtn = Math.ceil(79 / perPage);
  const [Url, setUrl] = useState(
    `https://my-mock-sever-api.onrender.com/course?_page=${page}&_limit=${perPage}`
  );

  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, perPage, Url]);

  const handleClick = (curr) => {
    console.log(curr);
    setPage(curr);
  };

  const handleSort = (e) => {
    const selectedValue = e.target.value;
    let sort = selectedValue;
    let order = "asc";

    if (e.target.value === "TuitionFeeDecending") {
      order = "desc";
      sort = "TuitionFee";
    }
    console.log(sort , order)
    setUrl(
      `https://my-mock-sever-api.onrender.com/course?_page=${page}&_limit=${perPage}&_sort=${sort}&_order=${order}`
    );

    // // fetch(
    // //   `https://my-mock-sever-api.onrender.com/course?_page=${page}&_limit=${perPage}&_sort=${sort}&_order=${order}`

    // // )
    // //   .then((res) => res.json())
    // //   .then((res) => setData(res))
    // //   .catch((err) => {
    // //     console.log(err);
    // //   });
  };
  return (
    <div className="w-[85%] m-auto">
      <p className="text-3xl text-center font-semibold p-5 mb-10">
        Find Study Programs in Germany
      </p>

      <p className="text-center mb-3">{`Displaying 1-${perPage} Universities/Hochshule out of 79`}</p>

      <div className="flex flex-cols-1 gap-4 place-content-center mb-10">
        {Array(totalbtn)
          .fill(0)
          .map((elem, i) => (
            <button key={i+100}
              onClick={() => handleClick(i + 1)}
              className=" lg:py-4 lg:px-6 lg:border hover:bg-green1 lg:hover:text-white text-lg"
            >
              {i + 1}
            </button>
          ))}
      </div>

      <div>
        <select onChange={(e) => handleSort(e)}>
          <option value="">---Sort---</option>
          <option value="WorldRanking">World Ranking Ascending</option>
          <option value="GermanyRanking">German Ranking Ascending</option>
          <option value="TuitionFee">Tuition Fee Ascending</option>
          <option value="TuitionFeeDecending">Tuition Fee Decending</option>
        </select>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[30%] border border-black ">Filters </div>
        <div className="flex flex-col gap-5 lg:w-[70%] md:w-full">
          {data.map((elem) => {
            return (
              <div
                key={elem.id}
                className="flex lg:flex-row flex-col gap-5 lg:p-10 md:p-2 drop-shadow-2xl bg-faint_grey ml-10 leading-loose"
              >
                <div className="lg:w-[20%]">
                  <img
                    className="h-20 w-20 mb-14"
                    src={UniversityLogo}
                    alt="UniversityLogo"
                  />
                  <p className="text-blue1">
                    World Ranking : {elem.WorldRanking}
                  </p>
                  <p className="text-blue1">
                    Germany Ranking : {elem.GermanyRanking}
                  </p>
                  <p>State : {elem.State}</p>
                </div>
                <div className="lg:w-[50%] lg:ml-5 lg:mr-5">
                  <p className="text-2xl mb-10 border-b-4 pb-1">
                    {elem.UniversityName}
                  </p>
                  <p>Degree: {elem.CourseType}</p>
                  <p>Stream : {elem.Stream}</p>
                  <p className="mb-10">
                    Beginning Semester :{elem.BeginningSemester}
                  </p>
                  <p className="text-green1">Duration : {elem.Duration}</p>
                  <p className="text-green1 ">
                    Teaching Language : {elem.TeachingLanguage}
                  </p>
                  <p>German Grade Requirement : not</p>
                </div>

                <div className="lg:w-[20%]">
                  <p className="text-blue1 mb-10">
                    Tuition Fee : {elem.TuitionFee}
                  </p>
                  <p className="text-blue2">
                    Application Deadline : {elem.applicationDeadline}
                  </p>
                  <button className="p-3 bg-dark_blue text-white mt-10 w-[125px] leading-normal">
                    Course Website
                  </button>
                  <button className="p-3 bg-dark_blue text-white mt-10 w-[125px] leading-normal">
                    Submit Application
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
