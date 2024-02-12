import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa";
import { TbTransitionBottom } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { FaLandmark } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";

export const experiencesData = [
    {
        title: "Establishment of Abulug Junior High School",
        location: "June, 1947",
        description:
            "Abulug Junior High School established in Abulug, Cagayan, offering the first two years of the general secondary curriculum.",
        icon: React.createElement(FaBuilding),
        date: "1947",
    },
    {
        title: "Transition to Abulug High School",
        location: "1949-1951",
        description:
            "In 1949, the school evolved into a complete provincial high school, assuming the name Abulug High School and producing its first graduates in the school year 1950-1951.",
        icon: React.createElement(TbTransitionBottom),
        date: "1949-1951",
    },
    {
        title: "Financial Independence and School Site Donation",
        location: "1950-1951",
        description:
            "The school was financially supported by student tuition fees during 1950-1951. A 24-hectare school site behind the municipal hall was donated by the municipal council.",
        icon: React.createElement(GiReceiveMoney),
        date: "1950-1951",
    },
    {
        title: "Leadership Changes",
        location: "1950s",
        description:
            "Headed by notable principals - Late Mr. Vicente Felix, Mrs. Felisa Florentino, and Late Mrs. Lourdes Pacquing, who later became the Head of the Related Subjects Department.",
        icon: React.createElement(MdLeaderboard),
        date: "1950s",
    },
    {
        title: "Conversion to Abulug National Rural and Vocational High School",
        location: "June 1960",
        description:
            "In June 1960, under Republic Act 2398 and with the support of Ex-Congressman Benjamin T. Ligot, Abulug High School transformed into Abulug National Rural and Vocational High School.",
        icon: React.createElement(FaBuilding),
        date: "1960",
    },
    {
        title: "Expansion and Land Acquisition",
        location: "August 1960",
        description:
            "August 1960 witnessed the arrival of Mr. Demetrio M. Cabantac as principal. The school acquired the present site of 189 hectares, planted with coconuts in 1962.",
        icon: React.createElement(FaLandmark),
        date: "1960",
    },
    {
        title: "Retirement of Mr. Demetrio M. Cabantac",
        location: "June 1984",
        description:
            "In June 1984, Mr. Demetrio M. Cabantac retired. His successor, Mr. Ernesto S. Esteban, made significant contributions, including the construction of the science building.",
        icon: React.createElement(FaBriefcase),
        date: "1984",
    },
    {
        title: "Mr. Dionisio A. Bautista's Leadership",
        location: "1991",
        description:
            "In 1991, Mr. Bautista was transferred to the regional office, promoted as General Education Supervisor I in Secondary Education.",
        icon: React.createElement(MdLeaderboard),
        date: "1991",
    },
    {
        title: "Mr. Ernesto S. Esteban's Promotions and Achievements",
        location: "1998",
        description:
            "Mr. Esteban's promotion to Chief of Technical Vocational Education Division, DECS, Region 2, led to various accomplishments. He left in 1998, succeeded by Mr. Dionisio A. Bautista.",
        icon: React.createElement(GrAchievement),
        date: "1998",
    },
    {
        title: "Current Principal: Mr. Ruben H. Cangas",
        location: "Present",
        description:
            "Mr. Cangas, hailing from the Island of Cagayan, took over as the new Principal. With notable achievements in a short period, he envisions graduates as pillars of Abulug's progress.",
        icon: React.createElement(LuGraduationCap),
        date: "Present",
    },
] as const;