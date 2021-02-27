describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  //volume changes
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume input changes when slider changes, but with audio element', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });  

  //image and sound sources changing
  it('sound for air horn', () => {
    cy.get('#radio-air-horn').check();
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3');

    });
  });
  it('icon for air horn', () => {
    cy.get('#radio-air-horn').check();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/air-horn.svg');

    });
  });

  it('sound for car horn', () => {
    cy.get('#radio-car-horn').check();
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');

    });
  });
  it('icon for car horn', () => {
    cy.get('#radio-car-horn').check();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');

    });
  });

  it('sound for party horn', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');

    });
  });
  it('icon for air horn', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');

    });
  });

  //Volume image changes
  it('volume level 3', () => {
    cy.get('#volume-number').clear().type(67);
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });
  it('volume level 2', () => {
    cy.get('#volume-number').clear().type(34);
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });
  it('volume level 1', () => {
    cy.get('#volume-number').clear().type(1);
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });
  it('volume level 0', () => {
    cy.get('#volume-number').clear().type(0);
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  //honk button 
  it('honk disabled when input is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.prop('disabled', true);
    });
  });
  it('honk disabled when input is non-number', () => {
    cy.get('#volume-number').clear().type('---');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  //error for outside of range
  it('error for number out of range', () => {
    cy.get('#volume-number').clear().type('150');
    cy.get('#honk-btn').click();
    cy.get('#volume-number:invalid').should('exist');
  });
});
