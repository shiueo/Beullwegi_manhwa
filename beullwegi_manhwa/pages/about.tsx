import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <>
      <Page title="About" description="">
        <Prose>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              width={"1920"}
              height={"1080"}
              src={"/shiueo_wallpaper.png"}
              alt={"shiueo_wallpaper"}
            />
          </p>
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Hello, I&#39;m shiüo!
          </h3>
          <hr></hr>

          <h2 id="-about-a-name-about-a-">😌 About </h2>
          <p>
            Hello, I am a quiet developer who specializes in creating software
            that addresses the needs I perceive or solves the tedious aspects
            for everyone. I have a wide range of interests including
            mathematics, video editing, image editing, music production, game
            development, and more. I am passionate about exploring multiple
            fields and applying my skills to develop innovative solutions.
          </p>

          <h2 id="-projects-a-name-projects-a-">🤪 Projects</h2>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Name</th>
                <th style={{ textAlign: "left" }}>Description</th>
                <th style={{ textAlign: "left" }}>Developer(s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "left" }}>
                  🏗️ <strong>FConv</strong> (05/10/2023-)
                </td>
                <td style={{ textAlign: "left" }}>
                  Simple File Format Converter{" "}
                  <a href="https://github.com/shiueo/FConv">[Repo]</a>
                </td>
                <td style={{ textAlign: "left" }}>Me</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>
                  🏗️ <strong>SIET</strong> (05/25/2023-)
                </td>
                <td style={{ textAlign: "left" }}>
                  <strong>S</strong>hiüo&#39;s <strong>I</strong>mage{" "}
                  <strong>E</strong>ffect <strong>T</strong>oolset{" "}
                  <a href="https://github.com/shiueo/SIET">[Repo]</a>
                </td>
                <td style={{ textAlign: "left" }}>Me</td>
              </tr>
            </tbody>
          </table>
          <h2 id="-social-media-a-name-social-a-">😚 Social media</h2>
          <ul>
            <li>
              <a href="https://www.youtube.com/channel/@shiueo">Youtube</a>
            </li>
            <li>
              <a href="https://twitter.com/shiueo_csh">Twitter</a>
            </li>
            <li>
              <a href="https://discord.gg/NXwVfdcygM">Discord</a>
            </li>
          </ul>
        </Prose>
      </Page>
    </>
  );
};

export default About;
