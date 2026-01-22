'use client'

import Link from "next/link";
import "./style.css";

interface Props {
    text: string
}

export default function Tag({text}: Props) {
  return (<Link href={`/${text}`} className="cursor-pointer mr-2 underline">#{text}</Link>)
}