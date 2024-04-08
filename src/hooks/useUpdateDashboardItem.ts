'use client'
import { useEffect, useState } from "react";
import { Portfolio, Project } from "../components/client/types";
import { getProjectById } from "../utils/http-requests/client";

export function useUpdateDashboardItem(
  intialData: Portfolio | Project,
  dashboardType: "portfolio" | "project" = "project"
) {
  const [data, setData] = useState<Portfolio | Project>(intialData);
  const [loading, setLoading] = useState(false);
  const [queryPeriod, setQueryPeriod] = useState("");

  const fetchProjctDetail = async () => {
    try {
      setLoading(true);
      const result = await getProjectById(data._id, queryPeriod);
      setData(result.data[dashboardType || "project"]);
      setLoading(false);
    } catch (error) {}
  };

  const { kpiData } = data;

  useEffect(() => {
    if (queryPeriod) {
      fetchProjctDetail();
    }
  }, [queryPeriod]);

  return {
    data,
    kpiData,
    loading,
    setQueryPeriod,
  };
}
