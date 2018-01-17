using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace AlwaysMoveForward.PointChart.Common
{
    public class Auth0Configuration : ConfigurationSection
    {
        public const string DefaultConfigurationSetting = "AlwaysMoveForward/Auth0Configuration";

        private const string k_ClientId = "ClientId";
        private const string k_ClientSecret = "ClientSecret";
        private const string k_Domain = "Domain";

        public static Auth0Configuration GetInstance()
        {
            return Auth0Configuration.GetInstance(DefaultConfigurationSetting);
        }

        public static Auth0Configuration GetInstance(string configurationSection)
        {
            return (Auth0Configuration)System.Configuration.ConfigurationManager.GetSection(configurationSection);
        }
        public Auth0Configuration() { }

        [ConfigurationProperty(Auth0Configuration.k_ClientId, IsRequired = true)]
        public string ClientId
        {
            get { return (string)this[Auth0Configuration.k_ClientId]; }
            set { this[Auth0Configuration.k_ClientId] = value; }
        }

        [ConfigurationProperty(Auth0Configuration.k_ClientSecret, IsRequired = true)]
        public string ClientSecret
        {
            get { return (string)this[Auth0Configuration.k_ClientSecret]; }
            set { this[Auth0Configuration.k_ClientSecret] = value; }
        }

        [ConfigurationProperty(Auth0Configuration.k_Domain, IsRequired = false)]
        public string Domain
        {
            get { return (string)this[Auth0Configuration.k_Domain]; }
            set { this[Auth0Configuration.k_Domain] = value; }
        }
    }
}