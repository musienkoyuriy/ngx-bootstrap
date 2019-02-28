import { ModalsPo } from '../support/modals.po';

describe('Modals demo page test suite', () => {
  const modals = new ModalsPo();

  beforeEach(() => modals.navigateTo());

  describe('Service examples', () => {

    describe('Template modal', () => {
      beforeEach('', () => {
        modals.scrollToMenu(' Template ');
      });

      const templateDemo = modals.exampleDemosArr.serviceTemplate;
      const btnText = 'Create template modal';
      const btnX = '×';

      it('example contains the button "Create template modal"', () => {
        modals.isButtonExist(templateDemo, btnText);
      });

      it(`when user clicks on the button "Create modal with component" then modal is opened and
      backdrop is enabled`, () => {
        modals.clickByText(templateDemo, btnText);
        modals.isModalVisible(modals.modalWindow, true);
        modals.isBackdropEnabled();
      });

      it('when user clicks on the cross button then the modal is closed', () => {
        modals.clickByText(templateDemo, btnText);
        modals.clickOnModalBtn(modals.serviceModalBtn, btnX);
        modals.isModalVisible(modals.modalWindow, true);
      });

      it('when user clicks on backdrop then the modal is closed', () => {
        modals.clickByText(templateDemo, btnText);
        modals.clickOnBackdrop();
        modals.isModalVisible(modals.modalWindow, true);
      });

      it('when user press on ESC btn then the modal is closed', () => {
        modals.clickByText(templateDemo, btnText);
        cy.get(modals.modalWindow).type('{esc}');
        modals.isModalVisible(modals.modalWindow, true);
      });
    });
  });
});
