
import { Breadcrumb } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useAppLayout } from "contexts";

interface BreadcrumbLink {
  href: string;
  title: string;
}

export type IBreadcrumbResolver = (id: string) => Promise<string>;
export type IBreadcrumbResolvers = Record<string, IBreadcrumbResolver>;

const LOADING_BREADCRUMB = "{LOADING}";
const extractKey = (key: string) => key.substring(1, key.length - 1);
const removeHyphens = (text = "") => text.split("-").join(" ");
const capitalise = (text = "") => text[0]?.toLocaleUpperCase() + text.substring(1);

const buildBreadcrumbsFromParts = async (
  parts: string[],
  params: Record<string, string>,
  paramResolvers: IBreadcrumbResolvers,
  resolveTitle: (part: string, id: string) => Promise<string>
): Promise<BreadcrumbLink[]> => {
  const links: BreadcrumbLink[] = [];

  const linkBuild = [];

  for (const part of parts) {
    let title: string | undefined;

    if (part in paramResolvers) {
      const key = extractKey(part);
      const id = params[key];
      linkBuild.push(id);
      title = await resolveTitle(part, id);
    } else {
      linkBuild.push(part);
    }

    links.push({
      title: title || capitalise(removeHyphens(part)),
      href: "/" + linkBuild.join("/"),
    });
  }

  return links;
};

const loadingIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

export const AutoBreadcrumbs: React.FC = () => {
  const router = useRouter();
  const { breadcrumbResolvers } = useAppLayout();

  const path = router.pathname.substring(1);
  const parts = path.split("/");

  const [crumbs, setCrumbs] = useState<BreadcrumbLink[]>([]);

  useEffect(() => {
    const params = router.query as Record<string, string>;

    buildBreadcrumbsFromParts(
      parts,
      params,
      breadcrumbResolvers,
      async () => LOADING_BREADCRUMB
    )
      .then(setCrumbs)
      .then(() =>
        buildBreadcrumbsFromParts(
          parts,
          params,
          breadcrumbResolvers,
          async (part, id) => breadcrumbResolvers[part](id)
        )
      )
      .then(setCrumbs);
  }, [router.asPath]);

  if (!crumbs.length || router.pathname === "/") {
    return null;
  }

  return (
    <Breadcrumb
      items={
        crumbs.map((crumb, index) => ({
          title: index === crumbs.length - 1
            ? (
              crumb.title === LOADING_BREADCRUMB
                ? loadingIcon
                : crumb.title
            )
            : <Link href={crumb.href}>{crumb.title}</Link>
        }))
      }
    />
  );
};
