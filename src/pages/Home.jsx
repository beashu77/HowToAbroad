import React, { useState, useEffect } from "react";
import CourseData from "../asset/data/courses.json";
import UniversityLogo from "../asset/images/University-logo.webp";
import { BsArrowClockwise } from "react-icons/bs";

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

  const fetchData = () => {
    fetch(Url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchData();

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
    console.log(sort, order);
    setUrl(
      (prevUrl) =>
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

  const handleReset = () => {
    setPage(1);
    setPerPage(10);
    setUrl(
      (prevUrl) =>
        `https://my-mock-sever-api.onrender.com/course?_page=${page}&_limit=${perPage}`
    );
  };

  const handleUniversityName = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setUrl(
      (prevUrl) =>
        `https://my-mock-sever-api.onrender.com/course?page=${page}&limit=${perPage}&UniversityName_like=${inputValue}`
    );
  };
  const handleCourseName = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setUrl(
      (prevUrl) =>
        `https://my-mock-sever-api.onrender.com/course?page=${page}&limit=${perPage}&CourseName_like=${inputValue}`
    );
  };
  const handleGermanyRanking = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setUrl(
      (prevUrl) =>
        `https://my-mock-sever-api.onrender.com/course?page=${page}&limit=${perPage}&GermanyRanking_like=${inputValue}`
    );
  };
  const handleCourseType = (e) => {
    const inputValue = e.target.value;
    setUrl(
      (prevUrl) =>
        `https://my-mock-sever-api.onrender.com/course?page=${page}&limit=${perPage}&CourseType_like=${inputValue}`
    );
  };
  const handleTeachingLanguage = (e) => {
    const inputValue = e.target.value;
    setUrl(
      (prevUrl) =>
        `https://my-mock-sever-api.onrender.com/course?page=${page}&limit=${perPage}&TeachingLanguage_like=${inputValue}`
    );
  };
  const handleBeginningSemester = (e) => {
    const inputValue = e.target.value;
    setUrl(
      (prevUrl) =>
        `https://my-mock-sever-api.onrender.com/course?page=${page}&limit=${perPage}&BeginningSemester_like=${inputValue}`
    );
  };
  const handleDuration = (e) => {
    const inputValue = e.target.value;
    setUrl(
      (prevUrl) =>
        `https://my-mock-sever-api.onrender.com/course?page=${page}&limit=${perPage}&Duration_like=${inputValue}`
    );
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
            <button
              key={i + 100}
              onClick={() => handleClick(i + 1)}
              className=" lg:py-4 lg:px-6 lg:border hover:bg-green1 lg:hover:text-white text-lg"
            >
              {i + 1}
            </button>
          ))}
      </div>

      <div className="flex mr-0">
        <select
          onChange={(e) => handleSort(e)}
          className="p-5 bg-grey text-white ml-auto"
        >
          <option value="">---Sort---</option>
          <option value="WorldRanking">World Ranking Ascending</option>
          <option value="GermanyRanking">German Ranking Ascending</option>
          <option value="TuitionFee">Tuition Fee Ascending</option>
          <option value="TuitionFeeDecending">Tuition Fee Decending</option>
        </select>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[30%] border border-black ">
          <button
            onClick={() => handleReset()}
            className="p-5 bg-grey text-white block lg:w-[90%] mb-5 flex m-auto rounded-lg"
          >
            Reset Filter <BsArrowClockwise className="inline" />
          </button>

          <input
            type="text"
            placeholder="University Name"
            className="mb-5 p-5 lg:w-[90%] border block  flex m-auto border-grey rounded-lg"
            onChange={(e) => handleUniversityName(e)}
          />
          <input
            type="text"
            placeholder="Course Name"
            className="mb-5 p-5 lg:w-[90%] border block  flex m-auto border-grey rounded-lg"
            onChange={(e) => handleCourseName(e)}
          />
          <input
            type="text"
            placeholder="Germany Ranking"
            className="mb-5 p-5 lg:w-[90%] border block  flex m-auto border-grey rounded-lg"
            onChange={(e) => handleGermanyRanking(e)}
          />

          <p>Course Type</p>

          <select
            onChange={(e) => handleCourseType(e)}
            className="p-5 bg-grey text-white block lg:w-[90%] mb-5 flex m-auto mt-5 rounded-lg"
          >
            <option value="">---Course Type---</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
          <p>Teaching language</p>

          <select
            onChange={(e) => handleTeachingLanguage(e)}
            className="p-5 bg-grey text-white block lg:w-[90%] mb-5 flex m-auto mt-5 rounded-lg"
          >
            <option value="">---Teaching language---</option>
            <option value="ITALIAN">ITALIAN</option>
            <option value="ENGLISH">ENGLISH</option>
          </select>
          <p>Beginning Semester</p>

          <select
            onChange={(e) => handleBeginningSemester(e)}
            className="p-5 bg-grey text-white block lg:w-[90%] mb-5 flex m-auto mt-5 rounded-lg"
          >
            <option value="">---Beginning Semester---</option>
            <option value="SUMMER">SUMMER</option>
            <option value="WINTER">WINTER</option>
          </select>
          <p>Duration </p>

          <select
            onChange={(e) => handleDuration(e)}
            className="p-5 bg-grey text-white block lg:w-[90%] mb-5 flex m-auto mt-5 rounded-lg"
          >
            <option value="">---Duration---</option>
            <option value="13 Semesters">13 Semesters</option>
            <option value="12 Semesters">12 Semesters</option>
          </select>

          <p>Tuition Fees </p>
          <label htmlFor="" className="mb-5 flex m-auto">Min</label>
          <input
            type="number"
            placeholder="min"
            defaultValue={0}
            className="mb-5 p-5 border flex m-auto border-grey rounded-lg"
          />
          <label htmlFor="" className="mb-5 flex m-auto">Max</label>
          <input
            type="number"
            placeholder="max"
            defaultValue={100000}
            className="mb-5 p-5  border   flex m-auto border-grey rounded-lg"
          />
        </div>

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
