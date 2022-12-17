import { Button, Chip } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import LButton from "../LButton";

const CompanyCard = ({ data, role }) => {

  return (
    <Link href={`/${role}/companies/${data.id}`} >
      <div className="hover:border-primary cursor-pointer border-white border-2 py-2 flex text-primary bg-white rounded">
        <div className="text-base w-7/12 md:w-1/2 p-4 m-1">
          <p className="text-xl font-semibold">{data.name}</p>
          <p className="mt-1 mb-4 text-base font-medium text-secondary">
            <span className="md:pr-4 block md:inline">{data.role}</span>
            <span className="md:px-4 block md:inline">{data.jobOfferType}</span>
            <span className="md:pl-4 block md:inline">{data.ctc}</span>
          </p>
          <p className="mb-4 font-medium">{data.date.substring(0, 10)}</p>
          <p className="text-sm underline underline-offset-4 mb-2 font-semibold text-gray-400">
            Eligibility :{" "}
          </p>
          <p>{data.eligibility}</p>
        </div>
        <div className="flex flex-col w-5/12 md:w-1/2 p-2 px-4 mt-1 items-end">
          <Chip
            style={{ fontSize: 16 }}
            className="text-xs font-medium md:text-medium"
            color="info"
            label={data.status}
          />
          <div className="flex w-full h-full flex-col justify-end">
            <div className="flex flex-wrap justify-end md:justify-start ">
              {data.labels.map((dept) => (
                <Chip
                  color="secondary"
                  className="font-medium m-2 px-4 text-white"
                  label={dept}
                />
              ))}
            </div>
            <span className="text-right text-sm my-2">
              Assignee :{" "}
              {data.assignee.map((i) => (
                <span>{i} </span>
              ))}{" "}
            </span>
           
           {role == "pc" ?
            <div className="flex">
              <Link href={`/${role}/companies/${data.id}/apply`} >
                <LButton style={{ marginRight: 8}} width="100%" name="Apply" />
              </Link>
              <LButton style={{ marginRight: 8}} width={150} name="edit" />
              <LButton style={{ marginRight: 8}} width={150} name="delete" />
            </div> : 
            role == "tpo" ? 
              <div className="flex">
                <LButton style={{ marginRight: 12}} width="100%" name="edit" />
                <LButton width="100%" name="delete" />
              </div> :
            <div>
              <Link href={`/${role}/companies/${data.id}/apply`} >
                <LButton style={{ marginRight: 8}} width="100%" name="Apply" />
              </Link>
            </div>
           }

          </div>
        </div>
      </div>
      <hr className="border-gray-400 border-1 " />
    </Link>
  );
};

export default CompanyCard;
