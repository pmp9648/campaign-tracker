@echo off

echo Updating CampaignTrackerAuth dependencies...
cd .\CampaignTrackerAuth
call dotnet add package Microsoft.EntityFrameworkCore

echo Updating CampaignTrackerCore dependencies...
cd ..\CampaignTrackerCore
call dotnet add package Microsoft.EntityFrameworkCore
call dotnet add package Newtonsoft.Json

echo Updating CampaignTrackerData dependencies...
cd ..\CampaignTrackerData
call dotnet add package Microsoft.EntityFrameworkCore.SqlServer
call dotnet add package Microsoft.EntityFrameworkCore.Tools
call dotnet add package Newtonsoft.Json

echo Updating CampaignTrackerDbCli dependencies...
cd ..\CampaignTrackerDbCli
call dotnet add package Microsoft.EntityFrameworkCore.Relational
call dotnet add package Microsoft.EntityFrameworkCore.SqlServer

echo Updating CampaignTrackerIdentity dependencies...
cd ..\CampaignTrackerIdentity
call dotnet add package Microsoft.Extensions.Configuration.Abstractions
call dotnet add package Microsoft.Extensions.Configuration.Binder
call dotnet add package System.DirectoryServices
call dotnet add package System.DirectoryServices.AccountManagement

echo Updating CampaignTrackerOffice dependencies...
cd ..\CampaignTrackerOffice
call dotnet add package DocumentFormat.OpenXml

echo Updating CampaignTrackerServices dependencies...
cd ..\CampaignTrackerServices
call dotnet add package Microsoft.EntityFrameworkCore

echo Updating CampaignTrackerSql dependencies...
cd ..\CampaignTrackerSql
call dotnet add package Microsoft.Data.SqlClient
call dotnet add package Newtonsoft.Json

echo Updating CampaignTrackerTests dependencies...
cd ..\CampaignTrackerTests
call dotnet add package Microsoft.EntityFrameworkCore
call dotnet add package Microsoft.NET.Test.Sdk
call dotnet add package xunit
call dotnet add package xunit.runner.visualstudio
call dotnet add package coverlet.collector

echo Updating CampaignTrackerWeb dependencies...
cd ..\CampaignTrackerWeb
call dotnet add package Automapper
call dotnet add package Microsoft.AspNetCore.Mvc.NewtonsoftJson
call dotnet add package Microsoft.AspNetCore.OData
call dotnet add package Microsoft.EntityFrameworkCore.Design
call dotnet add package Swashbuckle.AspNetCore
call dotnet add package Swashbuckle.AspNetCore.Newtonsoft
call dotnet add package System.Linq.Dynamic.Core

echo Caching NuGet dependencies...
cd ..\
call dotnet restore --packages nuget-packages

cd ..
echo Dependencies successfully updated!
