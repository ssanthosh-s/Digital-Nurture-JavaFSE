package com.springjpa.implservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.springjpa.implservices.entity.Country;
import com.springjpa.implservices.services.serviceimpl.CountryServiceImpl;

@SpringBootApplication
public class ImplservicesApplication implements org.springframework.boot.CommandLineRunner {
    @Autowired
    private  CountryServiceImpl countryService;
    public static void main(String[] args) {
        SpringApplication.run(ImplservicesApplication.class, args);
    }
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Fetching country by code: IN");
        System.out.println(countryService.getCountryByCode("IN"));

        System.out.println("Searching for countries with 'United'");
        countryService.searchCountriesByName("United").forEach(System.out::println);

        System.out.println("Adding a new country...");
        Country newCountry = new Country();
        newCountry.setCoCode("CA");
        newCountry.setCoName("Canada");
        countryService.addCountry(newCountry);

        System.out.println("Updating country name...");
        newCountry.setCoName("Canada - Updated");
        countryService.updateCountry(newCountry);

        System.out.println("Deleting country CA...");
        countryService.deleteCountry("CA");
    }
}
