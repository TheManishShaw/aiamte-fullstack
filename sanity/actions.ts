import { groq } from "next-sanity";
import { readClient, writeClient } from "./lib/client";
import { buildQuery } from "./utils";
import { NextApiRequest, NextApiResponse } from "next";

interface GetResourceParams {
  query: string;
  category: string;
  page: string;
}

export const getResourcePlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        title,
        _id,
        resources[0...6] ->{
            title,
            _id,
            description,
            downloadLink,
            "image":poster.asset->url,
            views,
            category,
            updatedAt
            
        }         
     }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getTeams = async () => {
  try {
    const res = await readClient.fetch(groq`*[_type == "team"]{
      "image":userImage.asset->url,
      _id,
        designation,
        fullName,
        TwitterLink,
        instagramLink,
        linkedinLink,
        message,
        description
    }
    `);

    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getSingleBlog = async (id: any) => {
  try {
    const blog = await readClient.fetch(`*[_type == "blog" && _id == "${id}"]{
      _id,
      author,
        popularTags,
        views,
        category,
        title,
        _createdAt,
        description,
        "authorImg" : authorImg.asset->url ,
        "poster": poster.asset->url,
        popularTags,
    }`);

    return blog[0];
  } catch (error) {
    console.log(error);
  }
};
export const getBlogs = async () => {
  try {
    const blog = await readClient.fetch(`*[_type == "blog"]{
      title,
      _id,
      downloadLink,
      "image":poster.asset->url,
      views,
      slug,
      category,
      description,
      "authorImg":image.asset->url,
      _createdAt,
      popularTags,
      author,
    }`);
    return blog;
  } catch (error) {
    console.log(error);
  }
};

export const getResource = async (params: GetResourceParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        "image":poster.asset->url,
        views,
        slug,
        category
      }`
    );
    return resources;
  } catch (error) {
    console.log(error);
  }
};
