﻿// <auto-generated />
using System;
using CampaignTracker.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CampaignTracker.Data.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220729204702_fixed character")]
    partial class fixedcharacter
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("CampaignTracker.Models.Campaign", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("CampaignEnd")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CampaignStart")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Current")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isComplete")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Campaign", (string)null);
                });

            modelBuilder.Entity("CampaignTracker.Models.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("CampaignId")
                        .HasColumnType("int");

                    b.Property<string>("Class")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("EventId")
                        .HasColumnType("int");

                    b.Property<string>("Firstname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lastname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Race")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CampaignId");

                    b.HasIndex("EventId");

                    b.ToTable("Character", (string)null);
                });

            modelBuilder.Entity("CampaignTracker.Models.Duration", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("EventId")
                        .HasColumnType("int");

                    b.Property<int>("Minutes")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EventId");

                    b.ToTable("Duration", (string)null);
                });

            modelBuilder.Entity("CampaignTracker.Models.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("EventTypeId")
                        .HasColumnType("int");

                    b.Property<int>("Index")
                        .HasColumnType("int");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("SessionId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TotalDuration")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EventTypeId");

                    b.HasIndex("SessionId");

                    b.ToTable("Event", (string)null);
                });

            modelBuilder.Entity("CampaignTracker.Models.EventType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EventType", (string)null);
                });

            modelBuilder.Entity("CampaignTracker.Models.Session", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("CampaignId")
                        .HasColumnType("int");

                    b.Property<string>("SessionDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Summary")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CampaignId");

                    b.ToTable("Session", (string)null);
                });

            modelBuilder.Entity("CampaignTracker.Models.Character", b =>
                {
                    b.HasOne("CampaignTracker.Models.Campaign", "Campaign")
                        .WithMany("Characters")
                        .HasForeignKey("CampaignId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CampaignTracker.Models.Event", "Event")
                        .WithMany("Characters")
                        .HasForeignKey("EventId");

                    b.Navigation("Campaign");

                    b.Navigation("Event");
                });

            modelBuilder.Entity("CampaignTracker.Models.Duration", b =>
                {
                    b.HasOne("CampaignTracker.Models.Event", "Event")
                        .WithMany("Durations")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Event");
                });

            modelBuilder.Entity("CampaignTracker.Models.Event", b =>
                {
                    b.HasOne("CampaignTracker.Models.EventType", "EventType")
                        .WithMany("Events")
                        .HasForeignKey("EventTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CampaignTracker.Models.Session", "Session")
                        .WithMany("Events")
                        .HasForeignKey("SessionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("EventType");

                    b.Navigation("Session");
                });

            modelBuilder.Entity("CampaignTracker.Models.Session", b =>
                {
                    b.HasOne("CampaignTracker.Models.Campaign", "Campaign")
                        .WithMany("Sessions")
                        .HasForeignKey("CampaignId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Campaign");
                });

            modelBuilder.Entity("CampaignTracker.Models.Campaign", b =>
                {
                    b.Navigation("Characters");

                    b.Navigation("Sessions");
                });

            modelBuilder.Entity("CampaignTracker.Models.Event", b =>
                {
                    b.Navigation("Characters");

                    b.Navigation("Durations");
                });

            modelBuilder.Entity("CampaignTracker.Models.EventType", b =>
                {
                    b.Navigation("Events");
                });

            modelBuilder.Entity("CampaignTracker.Models.Session", b =>
                {
                    b.Navigation("Events");
                });
#pragma warning restore 612, 618
        }
    }
}
