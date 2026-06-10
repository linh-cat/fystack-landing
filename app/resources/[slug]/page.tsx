import { notFound } from "next/navigation";
import { RESOURCES } from "@/app/resources/config";
import { ResourceLandingPage } from "./components/ResourceLandingPage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(RESOURCES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const resource = RESOURCES[slug];
  if (!resource) return {};
  return {
    title: `${resource.title} — Fystack`,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = RESOURCES[slug];
  if (!resource) notFound();

  return <ResourceLandingPage resource={resource} slug={slug} />;
}
