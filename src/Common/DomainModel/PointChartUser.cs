﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AlwaysMoveForward.Common.DomainModel;

namespace AlwaysMoveForward.PointChart.Common.DomainModel
{
    public class PointChartUser : IPointChartUser
    {
        public PointChartUser()
        {
            this.Id = -1;
            this.IsSiteAdministrator = false;
            this.PointEarners = new List<PointChartUser>();
        }

        public PointChartUser(User amfUser) : this()
        {
            this.OAuthServiceUserId = amfUser.Id.ToString();
            this.FirstName = amfUser.FirstName;
            this.LastName = amfUser.LastName;
        }

        #region IRemoteOAuthUser 

        public long Id { get; set; }
        public string OAuthServiceUserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AccessToken { get; set; }
        public string AccessTokenSecret { get; set; }

        #endregion

        public string GetDisplayName()
        {
            return this.FirstName + " " + this.LastName;
        }

        public bool IsSiteAdministrator { get; set; }

        public IList<PointChartUser> PointEarners { get; set; }
    }
}
