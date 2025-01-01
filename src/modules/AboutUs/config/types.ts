export type GoalData = {
  title: string;
  description: string;
  img: any;
};

export type AboutData = {
  AboutUs: {
    title: string;
  };
  goal_data: {
    Mission: GoalData[];
    Vision: GoalData[];
    REACH: GoalData[];
    [key: string]: GoalData[];
  };
};
